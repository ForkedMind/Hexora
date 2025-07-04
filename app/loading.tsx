import { Skeleton } from '@/components/ui/loading-skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-16 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <Skeleton className="h-8 w-8 mx-auto mb-4" />
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 space-y-4">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}