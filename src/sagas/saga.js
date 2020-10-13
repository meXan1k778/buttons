import { call, put, takeLatest } from 'redux-saga/effects';
import {FETCH_POST, putPost} from '../actions/actions'
import fetchPost from '../api-service/Reddit-api'
import RundomNum from '../Utils/utils'

export function* workerFetchPost (action) {
  try {
      const data =  yield call(fetchPost, action.payload)
      const {title, url} = data.data.children[RundomNum(27)].data
      yield put(putPost({title, url, isLiked: false, id: RundomNum(10000)}))
  } catch (error) {
      console.log(error)
  }
  
}

export function* whatchFetchPosts() {
    yield takeLatest(FETCH_POST, workerFetchPost);
  }