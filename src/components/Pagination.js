// CustomPagination.js
import React from 'react';
import PropTypes from 'prop-types';
// import './CustomPagination.css';  // Import CSS for pagination styling

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    console.log(currentPage);
    const handlePageChange = (pageNumber) => {
        if (pageNumber < 0 || pageNumber >= totalPages) return;
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 0}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    className={index === currentPage ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
            >
                Next
            </button>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
