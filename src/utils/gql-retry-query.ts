// src/utils/graphql-query-utils.ts
import { DocumentNode } from 'graphql';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

interface RetryableQueryOptions {
    maxRetries?: number;
    retryDelay?: number;
}

export const createRetryableQuery = (
    queryDocument: DocumentNode,
    queryName: string,
    options: RetryableQueryOptions = {}
) => {
    return () => {
        const {
            maxRetries = 5,
            retryDelay = 2000
        } = options;

        const [retryCount, setRetryCount] = useState(0);
        const { data, loading, error, refetch } = useQuery(queryDocument, {
            skip: retryCount >= maxRetries,
        });

        useEffect(() => {
            if (error && retryCount < maxRetries) {
                const timer = setTimeout(() => {
                    setRetryCount(prev => prev + 1);
                    refetch();
                }, retryDelay);

                return () => clearTimeout(timer);
            }
        }, [error, retryCount, refetch, maxRetries, retryDelay]);

        return {
            data: data?.[queryName],
            loading: !!(loading || (error && retryCount < maxRetries)),
            error,
            retryCount,
            refetch,
        };
    };
};