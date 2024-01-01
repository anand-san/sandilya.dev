import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import Image from 'next/image';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const postTitle = searchParams.get('title');
  const postPublishedAt = searchParams.get('publishedAt');
  const postReadingTime = searchParams.get('estimatedReadTime');
  const postSummary = searchParams.get('summary');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundImage: 'url(http://sandilya.dev/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 100,
            marginRight: 190,
            marginTop: 50,
            marginBottom: 0,
            display: 'flex',
            fontSize: 100,
            letterSpacing: '0.05em',
            fontStyle: 'normal',
            color: '#f5f5f4',
            whiteSpace: 'pre-wrap',
          }}
        >
          <p>{postTitle}</p>
        </div>
        <p
          style={{
            marginLeft: 120,
            marginTop: -75,
            display: 'flex',
            fontSize: 40,
            letterSpacing: '0.05em',
            fontStyle: 'normal',
            color: '#d6d3d1',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postSummary}
        </p>
        <p
          style={{
            marginLeft: 120,
            display: 'flex',
            fontSize: 40,
            letterSpacing: '0.05em',
            fontStyle: 'normal',
            color: '#a8a29e',
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
