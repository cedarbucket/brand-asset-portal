import { LinkedinAssets } from "@/utils/constants";
import { GenericSocialMediaAssetDownloader } from "../GenericSocialMediaAssetDownloader";

export const DownloadLinkedinAssets = () => {
  return (
    <GenericSocialMediaAssetDownloader
      title={"LinkedIn Assets"}
      description={
        "Enhance your brand presence on LinkedIn with optimized banners, posts, and visuals."
      }
      data={LinkedinAssets}
    />
  );
};
