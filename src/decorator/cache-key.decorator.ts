import { SetMetadata } from '@nestjs/common';

export const CacheKey = (cacheKeyValue) => SetMetadata('cache-key', cacheKeyValue);
