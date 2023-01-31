import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const Pagination = ({ itemsPerPage = 4, loadCurrentCapsules, items = [] }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    loadCurrentCapsules(event.selected);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
      <style>{`

        @media (max-width: 750px) {
            .page-link {
                margin: 0.5rem;
                padding: 0.05 rem 0.2rem;
                border-radius: 1rem;

            }
            .active > .page-link {
            background: rgb(0, 155, 155)
        }
        }

        @media (min-width: 751px) {
            .page-link {
                margin: 1rem;
                border: 1px solid #000;
                padding: 0.5rem 1rem;
                border-radius: 1rem;
            }
            .page-item {
            user-select: none  
        }
            .active > .page-link {
            background: rgb(0, 155, 155)
        }
        .page-link:hover:not(.active > .page-link, .disabled > .page-link ) {
            background: #fff;
            color: #000;
        }
        .disabled > .page-link {
            cursor: not-allowed !important;
        }
        .page-link.active:hover {
           color: #fff
        }
        }
        .pagination {
            display: flex;
            color: #fff;
            align-items: center;
            justify-content: center;
        }
        
    `}</style>
    </>
  );
};
export default Pagination;
