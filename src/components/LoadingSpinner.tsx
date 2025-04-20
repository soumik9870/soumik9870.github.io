
import { motion } from 'framer-motion';
import { Skeleton } from "./ui/skeleton";
import { useIsMobile } from '@/hooks/use-mobile';

const LoadingSpinner = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Navigation skeleton */}
        <div className="flex items-center justify-between py-4">
          <Skeleton className="h-8 w-24" />
          <div className="flex gap-6 items-center">
            {!isMobile && (
              <>
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </>
            )}
            <Skeleton className="h-10 w-10 rounded-full" />
            {isMobile && <Skeleton className="h-8 w-8" />}
          </div>
        </div>

        {/* Hero section skeleton */}
        <div className="text-center mt-20 mb-16">
          <Skeleton className="h-12 w-48 mx-auto mb-6" />
          <Skeleton className="h-8 w-72 mx-auto mb-8" />
          <Skeleton className="h-20 w-full max-w-2xl mx-auto mb-10" />
          
          {/* Quick links skeleton */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-12 rounded-full" />
            ))}
          </div>

          {/* CTA buttons skeleton */}
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-4`}>
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>

      {/* Background blob skeletons */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

