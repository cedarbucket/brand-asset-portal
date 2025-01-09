import { GenericSocialMediaAssetDownloader } from "../GenericSocialMediaAssetDownloader";
import { InstagramAssets } from "@/utils/constants";

export const DownloadInstagramAssets = () => {
  return (
    <GenericSocialMediaAssetDownloader
      title={"Instagram Assets"}
      description={
        "Enhance your brand presence on Instagram with optimized banners, posts, and visuals."
      }
      data={InstagramAssets}
    />
  );
};
