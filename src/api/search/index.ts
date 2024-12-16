import request from '@/utils/request'
import type { SearchForm } from './type'
import type { GeneralResponse } from '../generalType'

enum API {
  SEARCH_URL = 'dmhy/search',
}

export function search(searchForm: SearchForm) {
  return request.post<any, any>(API.SEARCH_URL, searchForm)
}
