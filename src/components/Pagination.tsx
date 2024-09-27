import Link from "next/link";
import React from "react";

interface PaginationProps {
  total: number;
  page: string;
}

const Pagination: React.FC<PaginationProps> = ({ page, total }) => {
  return (
    <div className="py-6 w-full px-10 flex justify-center gap-3 bg-white my-10 flex-wrap">
      {total <= 10 ? (
        [...Array(total)].map((_, index) => {
          return (
            <Link
              href={{
                pathname: "/stores",
                query: {
                  page: index + 1,
                },
              }}
              key={index}
            >
              <span
                className={`px-3 py-2 rounded border shadow-sm bg-white ${
                  index + 1 === parseInt(page, 10)
                    ? "text-blue-600"
                    : "text-gray-300"
                }  `}
              >
                {index + 1}
              </span>
            </Link>
          );
        })
      ) : (
        <>
          {+page > 1 && (
            <Link
              href={{
                pathname: "/stores",
                query: {
                  page: +page - 1,
                },
              }}
            >
              <span className={`px-3 py-2 rounded border shadow-sm bg-white`}>
                이전
              </span>
            </Link>
          )}
          <Link
            href={{
              pathname: "/stores",
              query: {
                page: +page,
              },
            }}
          >
            <span
              className={`px-3 py-2 rounded border shadow-sm bg-white text-blue-600`}
            >
              {page}
            </span>
          </Link>
          {(total ?? 0) > +page && (
            <Link
              href={{
                pathname: "/stores",
                query: {
                  page: +page + 1,
                },
              }}
            >
              <span className={`px-3 py-2 rounded border shadow-sm bg-white`}>
                다음
              </span>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
