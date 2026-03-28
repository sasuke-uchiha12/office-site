# Ciseco Mirror Cleanup Report

## Summary
- Files scanned before cleanup: 240
- Files deleted during cleanup: 81
- Remaining site files after cleanup: 159
- Workspace files after cleanup report generation: 160
- Preserved site scope: home, collections, products, blog, search, and one 404 design reference

## Delete Candidates

### HTTrack artifacts
- `index.html`: HTTrack launcher page that redirects into the mirrored site
- `cookies.txt`: crawler artifact, not needed for UI or React migration
- `hts-log.txt`: crawler log, not needed for UI or React migration
- `fade.gif`: used only by the HTTrack launcher page
- `backblue.gif`: used only by the HTTrack launcher page
- `hts-cache/doit.log`: crawler cache/log artifact
- `hts-cache/new.lst`: crawler cache artifact
- `hts-cache/new.txt`: crawler cache artifact
- `hts-cache/new.zip`: crawler cache artifact
- `hts-cache/readme.txt`: crawler cache artifact
- `hts-cache/winprofile.ini`: crawler cache artifact

### Query-variant duplicate HTML pages
- `ciseco-nextjs.vercel.app/404-2`: exact duplicate of `404`
- `ciseco-nextjs.vercel.app/blog2679.html`: exact duplicate of `blog.html`
- `ciseco-nextjs.vercel.app/blog4658.html`: exact duplicate of `blog.html`
- `ciseco-nextjs.vercel.app/blog9ba9.html`: exact duplicate of `blog.html`
- `ciseco-nextjs.vercel.app/blogfdb0.html`: exact duplicate of `blog.html`
- `ciseco-nextjs.vercel.app/search2679.html`: exact duplicate of `search.html`
- `ciseco-nextjs.vercel.app/search4658.html`: exact duplicate of `search.html`
- `ciseco-nextjs.vercel.app/search9ba9.html`: exact duplicate of `search.html`
- `ciseco-nextjs.vercel.app/searchfdb0.html`: exact duplicate of `search.html`
- `ciseco-nextjs.vercel.app/collections/accessories2679.html`: query variant of `collections/accessories.html`
- `ciseco-nextjs.vercel.app/collections/accessories4658.html`: query variant of `collections/accessories.html`
- `ciseco-nextjs.vercel.app/collections/accessories9ba9.html`: query variant of `collections/accessories.html`
- `ciseco-nextjs.vercel.app/collections/accessoriesfdb0.html`: query variant of `collections/accessories.html`
- `ciseco-nextjs.vercel.app/collections/all2679.html`: query variant of `collections/all.html`
- `ciseco-nextjs.vercel.app/collections/all4658.html`: query variant of `collections/all.html`
- `ciseco-nextjs.vercel.app/collections/all9ba9.html`: query variant of `collections/all.html`
- `ciseco-nextjs.vercel.app/collections/allfdb0.html`: query variant of `collections/all.html`
- `ciseco-nextjs.vercel.app/collections/beauty-products2679.html`: query variant of `collections/beauty-products.html`
- `ciseco-nextjs.vercel.app/collections/beauty-products4658.html`: query variant of `collections/beauty-products.html`
- `ciseco-nextjs.vercel.app/collections/beauty-products9ba9.html`: query variant of `collections/beauty-products.html`
- `ciseco-nextjs.vercel.app/collections/beauty-productsfdb0.html`: query variant of `collections/beauty-products.html`
- `ciseco-nextjs.vercel.app/collections/coats2679.html`: query variant of `collections/coats.html`
- `ciseco-nextjs.vercel.app/collections/coats4658.html`: query variant of `collections/coats.html`
- `ciseco-nextjs.vercel.app/collections/coats9ba9.html`: query variant of `collections/coats.html`
- `ciseco-nextjs.vercel.app/collections/coatsfdb0.html`: query variant of `collections/coats.html`
- `ciseco-nextjs.vercel.app/collections/digital-gift-cards2679.html`: query variant of `collections/digital-gift-cards.html`
- `ciseco-nextjs.vercel.app/collections/digital-gift-cards4658.html`: query variant of `collections/digital-gift-cards.html`
- `ciseco-nextjs.vercel.app/collections/digital-gift-cards9ba9.html`: query variant of `collections/digital-gift-cards.html`
- `ciseco-nextjs.vercel.app/collections/digital-gift-cardsfdb0.html`: query variant of `collections/digital-gift-cards.html`
- `ciseco-nextjs.vercel.app/collections/explore-new-arrivals2679.html`: query variant of `collections/explore-new-arrivals.html`
- `ciseco-nextjs.vercel.app/collections/explore-new-arrivals4658.html`: query variant of `collections/explore-new-arrivals.html`
- `ciseco-nextjs.vercel.app/collections/explore-new-arrivals9ba9.html`: query variant of `collections/explore-new-arrivals.html`
- `ciseco-nextjs.vercel.app/collections/explore-new-arrivalsfdb0.html`: query variant of `collections/explore-new-arrivals.html`
- `ciseco-nextjs.vercel.app/collections/jackets2679.html`: query variant of `collections/jackets.html`
- `ciseco-nextjs.vercel.app/collections/jackets4658.html`: query variant of `collections/jackets.html`
- `ciseco-nextjs.vercel.app/collections/jackets9ba9.html`: query variant of `collections/jackets.html`
- `ciseco-nextjs.vercel.app/collections/jacketsfdb0.html`: query variant of `collections/jackets.html`
- `ciseco-nextjs.vercel.app/collections/jeans2679.html`: query variant of `collections/jeans.html`
- `ciseco-nextjs.vercel.app/collections/jeans4658.html`: query variant of `collections/jeans.html`
- `ciseco-nextjs.vercel.app/collections/jeans9ba9.html`: query variant of `collections/jeans.html`
- `ciseco-nextjs.vercel.app/collections/jeansfdb0.html`: query variant of `collections/jeans.html`
- `ciseco-nextjs.vercel.app/collections/pets-food2679.html`: query variant of `collections/pets-food.html`
- `ciseco-nextjs.vercel.app/collections/pets-food4658.html`: query variant of `collections/pets-food.html`
- `ciseco-nextjs.vercel.app/collections/pets-food9ba9.html`: query variant of `collections/pets-food.html`
- `ciseco-nextjs.vercel.app/collections/pets-foodfdb0.html`: query variant of `collections/pets-food.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection2679.html`: query variant of `collections/sale-collection.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection4658.html`: query variant of `collections/sale-collection.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection9ba9.html`: query variant of `collections/sale-collection.html`
- `ciseco-nextjs.vercel.app/collections/sale-collectionfdb0.html`: query variant of `collections/sale-collection.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection-22679.html`: query variant of `collections/sale-collection-2.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection-24658.html`: query variant of `collections/sale-collection-2.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection-29ba9.html`: query variant of `collections/sale-collection-2.html`
- `ciseco-nextjs.vercel.app/collections/sale-collection-2fdb0.html`: query variant of `collections/sale-collection-2.html`
- `ciseco-nextjs.vercel.app/collections/shoes2679.html`: query variant of `collections/shoes.html`
- `ciseco-nextjs.vercel.app/collections/shoes4658.html`: query variant of `collections/shoes.html`
- `ciseco-nextjs.vercel.app/collections/shoes9ba9.html`: query variant of `collections/shoes.html`
- `ciseco-nextjs.vercel.app/collections/shoesfdb0.html`: query variant of `collections/shoes.html`
- `ciseco-nextjs.vercel.app/collections/sport-kits2679.html`: query variant of `collections/sport-kits.html`
- `ciseco-nextjs.vercel.app/collections/sport-kits4658.html`: query variant of `collections/sport-kits.html`
- `ciseco-nextjs.vercel.app/collections/sport-kits9ba9.html`: query variant of `collections/sport-kits.html`
- `ciseco-nextjs.vercel.app/collections/sport-kitsfdb0.html`: query variant of `collections/sport-kits.html`
- `ciseco-nextjs.vercel.app/collections/t-shirts2679.html`: query variant of `collections/t-shirts.html`
- `ciseco-nextjs.vercel.app/collections/t-shirts4658.html`: query variant of `collections/t-shirts.html`
- `ciseco-nextjs.vercel.app/collections/t-shirts9ba9.html`: query variant of `collections/t-shirts.html`
- `ciseco-nextjs.vercel.app/collections/t-shirtsfdb0.html`: query variant of `collections/t-shirts.html`
- `ciseco-nextjs.vercel.app/collections/travel-kits2679.html`: query variant of `collections/travel-kits.html`
- `ciseco-nextjs.vercel.app/collections/travel-kits4658.html`: query variant of `collections/travel-kits.html`
- `ciseco-nextjs.vercel.app/collections/travel-kits9ba9.html`: query variant of `collections/travel-kits.html`
- `ciseco-nextjs.vercel.app/collections/travel-kitsfdb0.html`: query variant of `collections/travel-kits.html`

### Mirrored external-domain files
- `images.pexels.com/photos/6802060/pexels-photo-68020601672.jpg`: mirrored external asset not needed because kept pages use the local `_next/pexels-photo-6802060b51b.jpg` file

## Keep Notes
- Keep the full `ciseco-nextjs.vercel.app/_next/` tree.
- Keep canonical HTML routes under `ciseco-nextjs.vercel.app/`.
- Keep `ciseco-nextjs.vercel.app/icon8535.png`.
- Keep both `collections/sale-collection.html` and `collections/sale-collection-2.html`.
- Keep both `blog/the-must-have-hijabi-friendly-fabrics-for-2024.html` and `blog/the-must-have-hijabi-friendly-fabrics-for.html`.

## React Migration Flags
- Shared UI should be extracted into `Header`, `MobileMenu`, `Footer`, `Hero`, `CollectionCard`, `ProductCard`, and `BlogCard`.
- Route families map cleanly to `CollectionPage`, `ProductPage`, `BlogIndex`, `BlogPost`, `SearchPage`, and `NotFoundPage`.
- Inline `self.__next_f.push(...)` payloads are hydration output, not reusable app logic.
