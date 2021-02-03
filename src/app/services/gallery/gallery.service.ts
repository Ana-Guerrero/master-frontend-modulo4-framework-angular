import { Injectable } from '@angular/core';
import { ApiPictureEntity, apiPictureList } from '../../../api';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  pictureGalleryList: ApiPictureEntity[];

  constructor() {}

  getApiPictureListPromise(): Promise<ApiPictureEntity[]> {
    return Promise.resolve(apiPictureList);
  }
}
