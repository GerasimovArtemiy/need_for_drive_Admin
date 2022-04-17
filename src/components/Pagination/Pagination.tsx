import React, { FC } from 'react'
import classes from 'classnames'
import { usePagination, dotsPagination } from '../../hooks/usePagination'
import { LeftArrow, RightArrow } from './PaginationArrows'
import cl from './Pagination.module.scss'

interface IPaginationProps {
    onPageChange: (page: number) => void
    totalCount: number
    siblingCount: number
    currentPage: number
    pageSize: number
    className: string
}
const Pagination: FC<IPaginationProps> = (props) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    if (currentPage === 0 || paginationRange.length < 2) {
        return null
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    const lastPage = paginationRange[paginationRange.length - 1]
    return (
        <ul className={classes(cl.pagination_container, { [className]: className })}>
            <li
                className={classes(cl.pagination_item, cl.arrow, {
                    [cl.disabled]: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                {LeftArrow}
            </li>
            {paginationRange.map((pageNumber: any, i: number) => {
                if (pageNumber === dotsPagination) {
                    return (
                        <li key={i} className={classes(cl.pagination_item, cl.dots)}>
                            &#8230;
                        </li>
                    )
                }
                return (
                    <li
                        key={i}
                        className={classes(cl.pagination_item, {
                            [cl.page_selected]: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                )
            })}
            <li
                className={classes(cl.pagination_item, cl.arrow, {
                    [cl.page_disabled]: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                {RightArrow}
            </li>
        </ul>
    )
}

export default Pagination
