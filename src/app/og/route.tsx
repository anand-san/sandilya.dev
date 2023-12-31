import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const postTitle = searchParams.get('title');
  const postImage = searchParams.get('image');
  const postPublishedAt = searchParams.get('publishedAt');
  const postReadingTime = searchParams.get('estimatedReadTime');

  const font = fetch(
    new URL('../../../public/fonts/kaisei-tokumin-bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(https://sandilya.dev/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Kaisei Tokumin',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postImage && (
            <Image
              src={postImage}
              alt='blog-image'
              style={{ borderRadius: '50%' }}
            />
          )}
          <h2>{postTitle}</h2>
          <p>
            {postPublishedAt} &middot; {postReadingTime}
          </p>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Kaisei Tokumin',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}