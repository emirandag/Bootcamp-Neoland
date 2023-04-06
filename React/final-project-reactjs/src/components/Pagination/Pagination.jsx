// import { useOutletContext } from "react-router-dom"

// import ReactPaginate from "react-paginate";
// import { useEffect, useState } from "react";

// const Pagination = ({pageNumber, info, updatePageNumber}) => {
//     const [movies] = useOutletContext()
//     const handleChangePage = (movies) => {
//         updatePageNumber(movies.selected+1)
//     }

//     const [width, setWidth] = useState(window.innerWidth);
//     const updateDimensions = () => {
//       setWidth(window.innerWidth);
//     };
//     useEffect(() => {
//       window.addEventListener("resize", updateDimensions);
//       return () => window.removeEventListener("resize", updateDimensions);
//     }, []);
//   return (
//     <>
//     <style jsx>
//       {`
//         @media (max-width: 768px) {
//           .pagination {
//             font-size: 12px;
//           }
//           .next,
//           .prev {
//             display: none;
//           }
//         }
//         @media (max-width: 768px) {
//           .pagination {
//             font-size: 14px;
//           }
//         }
//       `}
//     </style>
//     <ReactPaginate
//       className="pagination justify-content-center my-4 gap-4"
//       nextLabel="Next"
//       forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
//       previousLabel="Prev"
//       previousClassName="btn btn-primary fs-5 prev"
//       nextClassName="btn btn-primary fs-5 next"
//       activeClassName="active"
//       marginPagesDisplayed={width < 576 ? 1 : 2}
//       pageRangeDisplayed={width < 576 ? 1 : 2}
//       pageCount={info?.pages}
//       onPageChange={handleChangePage}
//       pageClassName="page-item"
//       pageLinkClassName="page-link"
//     />
//   </>
//   )
// }

// export default Pagination


import React, { useState } from 'react'
import { getMovies } from '../../services/movies';

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
  
    const handleNextPage = async () => {
      const nextPage = page + 1;
      const movies = await getMovies(nextPage);
      setMovies(movies);
      setPage(nextPage);
    };
  
    const handlePrevPage = async () => {
      if (page > 1) {
        const prevPage = page - 1;
        const movies = await getMovies(prevPage);
        setMovies(movies);
        setPage(prevPage);
      }
    };

    return {handleNextPage, handlePrevPage}
  
}

export default Pagination