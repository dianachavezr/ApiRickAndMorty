import React from 'react'
import ReactPaginate from 'react-paginate';

const PaginationPrueba = ({ info, page, setPage }) => {
    console.log(info)
    return (
        <div>
            <ul>
                {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
            </ul>
            <Pagination
                className="bg-red"
                total={info.pages}
                limit={limit}
                pageCount={info.count}
                currentPage={page}
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                    <div>
                        <button
                            {...getPageItemProps({
                                pageValue: 1,
                                onPageChange: this.handlePageChange
                            })}
                        >
                            first
                        </button>

                        {hasPreviousPage && (
                            <button
                                {...getPageItemProps({
                                    pageValue: previousPage,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                {'<'}
                            </button>
                        )}

                        {pages.map(page => {
                            let activePage = null;
                            if (currentPage === page) {
                                activePage = { backgroundColor: '#fdce09' };
                            }
                            return (
                                <button
                                    {...getPageItemProps({
                                        pageValue: page,
                                        key: page,
                                        style: activePage,
                                        onPageChange: this.handlePageChange
                                    })}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        {hasNextPage && (
                            <button
                                {...getPageItemProps({
                                    pageValue: nextPage,
                                    onPageChange: this.handlePageChange
                                })}
                            >
                                {'>'}
                            </button>
                        )}
                        <button
                            {...getPageItemProps({
                                pageValue: totalPages,
                                onPageChange: this.handlePageChange
                            })}
                        >
                            last
                        </button>
                    </div>
                )}
            </Pagination>
        </div>
    )
};

export default PaginationPrueba