import {E403_ROUTE, E404_ROUTE, E500_ROUTE, E503_ROUTE, E509_ROUTE} from '../components/routing/constants'

export const errorPages = {
    404: E404_ROUTE,
    403: E403_ROUTE,
    500: E500_ROUTE,
    503: E503_ROUTE,
    509: E509_ROUTE,
    default: E509_ROUTE
}