import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, page, setPage }) => {
    console.log(info)
    return (

        <ReactPaginate className='pagination d-flex flex-wrap justify-content-center gap-4 my-4'
            forcePage={page == 1 ? 0 : page - 1}
            nextLabel='Next'
            previousLabel='Prev'
            nextClassName='btn btn-dark'
            previousClassName='btn btn-dark'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange={(data) => {
                setPage(data.selected + 1)
            }}
            pageCount={info.pages} />
        )
};

export default Pagination