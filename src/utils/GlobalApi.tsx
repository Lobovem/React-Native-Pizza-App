import { request, gql } from 'graphql-request';

const URL_CONTENT =
  'https://api-us-west-2.hygraph.com/v2/clt7795ph0o1207us95ug9haa/master';

const getBanners = async () => {
  const query = gql`
    query GetBanners {
      banners {
        id
        name
        image {
          url
        }
      }
    }
  `;

  const result = await request(URL_CONTENT, query);
  return result;
};

export default { getBanners };
