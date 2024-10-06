import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let dict = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    dict = { photo, user };
  } catch (err) {
    dict = { photo: null, user: null };
  }
  return dict;
}
