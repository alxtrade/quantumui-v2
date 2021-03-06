export const PG_TITLE_PREFIX = 'Cryptobase';

export const pgRoutes = (isLoggedIn: boolean, isLight?: boolean): string[][] => {
    const routes = [
        ['page.header.navbar.profile', '/profile', `profile`],
        ['page.header.navbar.trade', '/trading/', `trade`],
        ['page.header.navbar.wallets', '/wallets', `wallets`],
        ['page.header.navbar.openOrders', '/orders', `orders`],
        ['page.header.navbar.history', '/history', `history`],
    ];
    const routesUnloggedIn = [
        ['page.header.navbar.trade', '/trading/', `trade`],
        ['page.header.signUp', '/signup', `signup`],
        ['page.header.navbar.signIn', '/signin', `signin`],
    ];

    return isLoggedIn ? routes : routesUnloggedIn;
};

export const DEFAULT_CCY_PRECISION = 4;
export const STORAGE_DEFAULT_LIMIT = 50;
export const ORDER_BOOK_DEFAULT_SIDE_LIMIT = 25;
export const DEFAULT_TRADING_VIEW_INTERVAL = '15';
export const VALUATION_PRIMARY_CURRENCY = 'USD';
export const VALUATION_SECONDARY_CURRENCY = 'ETH';

export const PASSWORD_ENTROPY_STEP = 6;

export const colors = {
    light: {
        chart: {
            primary: '#fff',
            up: '#54B489',
            down: '#E85E59',
        },
        navbar: {
            sun: 'var(--icons)',
            moon: 'var(--primary-text-color)',
        },
        orderBook: {
            asks: 'var(--asks-level-2)',
            bids: 'var(--bids-level-2)',
        },
        depth: {
            fillAreaAsk: '#fa5252',
            fillAreaBid: '#12b886',
            gridBackgroundStart: '#1a243b',
            gridBackgroundEnd: '#1a243b',
            strokeAreaAsk: '#fa5252',
            strokeAreaBid: '#12b886',
            strokeGrid: '#B8E9F5',
            strokeAxis: '#cccccc',
        },
    },
    basic: {
        chart: {
            primary: 'var(--rgb-body-background-color)',
            up: 'var(--rgb-bids)',
            down: 'var(--rgb-asks)',
        },
        navbar: {
            sun: 'var(--primary-text-color)',
            moon: 'var(--icons)',
        },
        orderBook: {
            asks: 'var(--asks-level-2)',
            bids: 'var(--bids-level-2)',
        },
        depth: {
            fillAreaAsk: 'var(--rgb-asks)',
            fillAreaBid: 'var(--rgb-bids)',
            gridBackgroundStart: 'var(--rgb-asks)',
            gridBackgroundEnd: 'var(--rgb-asks)',
            strokeAreaAsk: 'var(--rgb-asks)',
            strokeAreaBid: 'var(--rgb-bids)',
            strokeGrid: 'var(--rgb-secondary-contrast-cta-color)',
            strokeAxis: 'var(--rgb-primary-text-color)',
        },
    },
};
