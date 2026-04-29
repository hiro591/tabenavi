import {
  Camera,
  CameraResultType,
  CameraSource,
  type Photo,
} from "@capacitor/camera";
import { isNative } from "./platform";

export type CapturedPhoto = {
  dataUrl: string;
  format: string;
  saved: boolean;
};

export const captureMealPhoto = async (): Promise<CapturedPhoto | null> => {
  if (!isNative()) {
    throw new Error("Camera capture is only available in the native app.");
  }

  const photo: Photo = await Camera.getPhoto({
    quality: 85,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera,
    saveToGallery: false,
    correctOrientation: true,
    promptLabelHeader: "食事の写真",
    promptLabelCancel: "キャンセル",
    promptLabelPhoto: "ライブラリから選ぶ",
    promptLabelPicture: "撮影する",
  });

  if (!photo.dataUrl) return null;

  return {
    dataUrl: photo.dataUrl,
    format: photo.format,
    saved: false,
  };
};

export const pickMealPhotoFromLibrary = async (): Promise<CapturedPhoto | null> => {
  if (!isNative()) {
    throw new Error("Photo library picker is only available in the native app.");
  }

  const photo: Photo = await Camera.getPhoto({
    quality: 85,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Photos,
    correctOrientation: true,
  });

  if (!photo.dataUrl) return null;

  return {
    dataUrl: photo.dataUrl,
    format: photo.format,
    saved: false,
  };
};
