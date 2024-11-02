interface PackageData {
    title: string;
    items: string[];
    price: string;
    link: string;
  }
  
  type PackageInfoProps = {
    data: PackageData;
  };