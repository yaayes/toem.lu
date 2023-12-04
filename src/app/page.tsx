import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoHomeWorkDark from '@/images/clients/home-work/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import immoFeature from "@/images/immo-features.svg";
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Pricing from '@/components/Pricing'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56" id='nos-clients'>
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Nous avons travaillé avec d’excellents clients.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        title="Pourquoi Choisir TOEM ?"
        className="mt-24 sm:mt-32 lg:mt-40"
        id="pourquoi-choisir-TEOM"
      >
        <p>
          Notre mission est de vous donner les outils, les conseils et le soutien nécessaires pour que votre vente soit simple, rapide et rentable.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={immoFeature}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Conseils">
              Notre équipe est là pour vous guider à chaque étape du processus. Nous vous donnons des conseils pratiques pour prendre des photos attrayantes, rédiger une description convaincante et mettre en valeur les atouts de votre propriété.
            </ListItem>
            <ListItem title="Service de nettoyage professionnel">
              Avant les visites, nous vous proposons un service de nettoyage professionnel pour que votre maison ou appartement soit présenté sous son meilleur jour. Une propriété propre et bien entretenue aura un impact positif sur les acheteurs potentiels.
            </ListItem>
            <ListItem title="Economisez sur les commissions">
              En choisissant de vendre par vous-même, vous évitez les commissions d’agence élevées. Cela signifie que vous pouvez garder une plus grande part du prix de vente pour vous.
            </ListItem>
            <ListItem title="Mise en valeur de votre bien">
              Nous vous aidons à présenter votre propriété de manière attrayante et professionnelle. Grâce à nos conseils et astuces, vous attirerez l’attention des acheteurs potentiels dès le premier regard.
            </ListItem>
            <ListItem title="Assistance personnalisée">
              Vous n’êtes pas seul dans cette aventure. Notre équipe est disponible pour répondre à vos questions, vous conseiller sur les meilleures pratiques et vous aider à surmonter les éventuels obstacles.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'L’expert de l’auto-vente immobilière au Luxembourg.',
}

export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-5xl line-clamp-6">
          <h1 className="font-display text-5xl font-medium tracking-tight text-gray-700  sm:text-7xl">
            L’expert de l’auto-vente immobilière au Luxembourg.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Chez Toem, nous croyons que vendre votre maison ou appartement par vous-même ne devrait pas être difficile. C’est pourquoi nous avons créé une plateforme unique pour vous aider à réussir votre vente tout en gardant le contrôle total du processus.
          </p>

        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <Pricing />

      {/* <CaseStudies caseStudies={caseStudies} /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Home Work', logo: logoHomeWorkDark }}
      >
        Travailler avec TOEM a été une expérience exceptionnelle. Leur équipe professionnelle et dévouée a rendu le processus d’achat de notre maison de rêve sans stress. Leur expertise, leur attention aux détails et leur approche personnalisée en font une agence immobilière de confiance et recommandable.
      </Testimonial>

      <ContactSection />
    </>
  )
}
