import { FacebookAssets } from "@/utils/constants";
import { GenericSocialMediaAssetDownloader } from "../GenericSocialMediaAssetDownloader";

export const DownloadFacebookAssets = () => {
  return (
    <GenericSocialMediaAssetDownloader
      title={"Facebook Assets"}
      description={
        "Enhance your brand presence on Facebook with optimized banners, posts, and visuals."
      }
      data={FacebookAssets}
    />
  );
};
