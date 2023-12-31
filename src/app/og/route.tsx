import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const postTitle = searchParams.get('title');
  const postPublishedAt = searchParams.get('publishedAt');
  const postReadingTime = searchParams.get('estimatedReadTime');

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
            fontFamily: 'Sans-serif',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: '#111827',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          <p>{postTitle}</p>
        </div>
        <p
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 30,
            fontFamily: 'Sans-serif',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: '#111827',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postPublishedAt} &middot; {postReadingTime} minutes read
        </p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
