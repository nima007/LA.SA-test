

export default function extractProductDataByLang(product, lang) {
    console.log("lang", lang);
    console.log("product", product);
    
  return {
    name: product.name[lang],
    description: product.description[lang],
    attributes: product.attributes.map((attribute) => ({
      name: attribute.name[lang],
      value: attribute.value[lang],
      unit: attribute.unit[lang],
    })),
    primaryImage: product.primaryImage,
    catalogue:product.catalogue.length?product.catalogue:null,
    images: product.images,
    slug:product.slug
  };
}