import React from 'react';
import { Item, Wrapper } from './Pagination.styles';

import { usePagination, DOTS } from '../../hooks/usePagination';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
      } = props;
    
      const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      });
    
      // If there are less than 2 times in pagination range we shall not render the component
    //   if (currentPage === 0 || paginationRange.length < 2) {
    //     return null;
    //   }
    
      const onNext = () => {
        onPageChange(currentPage + 1);
      };
    
      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };
    
      let lastPage = paginationRange[paginationRange.length - 1];
      return (
        <Wrapper className={className}>
           {/* Left navigation arrow */}
          <Item className={currentPage === 1 ? 'disabled': ''} onClick={onPrevious} >
            <div className="arrow left" />
          </Item>


          {paginationRange.map((pageNumber, index) => {
             
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return <Item className="dots">&#8230;</Item>;
            }
            
            // Render our Page Pills
            return (
              <Item className={pageNumber === currentPage ? 'selected' : ''} onClick={() => onPageChange(pageNumber)} key={index}>
                {pageNumber}
              </Item>
            );
          })}
          {/*  Right Navigation arrow */}
          <Item className={currentPage === lastPage ? 'disabled' : ''} onClick={onNext}>
            <div className="arrow right" />
          </Item>
        </Wrapper>
      );
}

export default Pagination;