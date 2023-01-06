import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'X-RapidAPI-Key': '043a10279emsh40fd487982b7b97p19258ejsnf5c991645eb1', 
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

};

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/stats`),
    }),
  }),
});

 export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery, 
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
 } = cryptoApi