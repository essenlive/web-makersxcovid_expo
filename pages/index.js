import Layout from '@components/Layout'
import Section from "@components/Section";
import Photo from "@components/Photo";
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Expo"
    >
        <Photo
          name="Quentin Chevrier"
          src="/photos/home/simplonlab_textiles-1-quentin_chevrier.jpg"
        alt="SimplonLab - Crédit Photo : Quentin Chevrier"
        color1="#e5e9ec"
        color2="#e2e7e6"
        color3="#e8ecf8"
        />
      <Section className="container mx-auto justify-center">

          <Link href="/themes">
            <button className="flex bg-white hover:bg-transparent uppercase cursor-pointer h-min border-4 p-4 border-black text-base font-bold mt-12 items-center mx-auto">
                Découvrir les photos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
          </Link>
        </Section>
    </Layout>
  );
}
