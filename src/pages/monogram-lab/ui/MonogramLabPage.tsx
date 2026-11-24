import { Container } from '@shared/ui'
import { MONOGRAM_PROPOSALS } from '../model/proposals'
import { MonogramSvg } from './MonogramSvg'
import { ProposalCard } from './ProposalCard'

const CRITERIA_COLUMNS = [
  'Originalidad',
  'Reconoc.',
  'Y·A·K',
  'Coherencia',
  'Equilibrio',
  'Escala',
  'Monocromo',
  'Potencial',
] as const

export function MonogramLabPage() {
  return (
    <div className="bg-surface-base text-ink-primary">
      {/* Introducción editorial de la página temporal /logos */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-accent uppercase">
              Exploración temporal de identidad · 6 direcciones constructivas
            </p>

            <nav
              aria-label="Índice de propuestas de monograma"
              className="flex flex-wrap gap-2"
            >
              {MONOGRAM_PROPOSALS.map((proposal) => (
                <a
                  key={proposal.id}
                  href={`#${proposal.id}`}
                  className="rounded-editorial border border-line-subtle bg-surface-elevated px-2.5 py-1 font-sans text-xs font-semibold text-ink-primary transition-colors hover:border-brand-forest hover:text-ink-brand"
                >
                  {proposal.index}
                </a>
              ))}
              <a
                href="#comparativa"
                className="rounded-editorial bg-brand-forest px-3 py-1 font-sans text-xs font-semibold text-ink-on-dark transition-colors hover:bg-brand-forest-hover"
              >
                Comparativa
              </a>
            </nav>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] font-medium text-ink-primary sm:text-5xl">
            Monograma YOKALI: seis arquitecturas distintas a partir de Y, A y K.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
            Página temporal de evaluación visual para comparar cada símbolo en
            bicolor, monocromo, escalas reales (16 a 128 px), composición junto
            al nombre YOKALI y diagrama constructivo interactivo antes de
            aprobar el símbolo definitivo.
          </p>

          {/* Vista rápida comparativa de las 6 siluetas */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {MONOGRAM_PROPOSALS.map((proposal) => (
              <a
                key={proposal.id}
                href={`#${proposal.id}`}
                className="group flex flex-col items-center rounded-panel border border-line-subtle bg-surface-elevated p-5 text-center transition-colors hover:border-brand-forest"
              >
                <MonogramSvg proposal={proposal} mode="bicolor" size={56} />
                <span className="mt-4 font-sans text-[11px] font-bold tracking-[0.16em] text-ink-accent uppercase">
                  {proposal.index}
                </span>
                <span className="mt-1 font-display text-sm font-medium text-ink-primary group-hover:text-ink-brand">
                  {proposal.name}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Desarrollo detallado de cada propuesta */}
      <section className="pb-16">
        <Container>
          {MONOGRAM_PROPOSALS.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </Container>
      </section>

      {/* Tabla comparativa completa de los 8 criterios */}
      <section
        id="comparativa"
        className="scroll-mt-24 border-t border-line-strong bg-surface-sage/55 py-16 sm:py-20"
      >
        <Container>
          <p className="font-sans text-xs font-bold tracking-[0.2em] text-ink-brand uppercase">
            Síntesis evaluativa
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink-primary sm:text-4xl">
            Tabla comparativa de las 6 propuestas
          </h2>

          <div className="mt-8 overflow-x-auto rounded-panel border border-line-subtle bg-surface-elevated">
            <table className="w-full min-w-[960px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line-strong bg-surface-base text-[11px] uppercase">
                  <th className="px-4 py-4 font-bold text-ink-primary">
                    Propuesta
                  </th>
                  <th className="px-3 py-4 text-center font-bold text-ink-secondary">
                    16px
                  </th>
                  {CRITERIA_COLUMNS.map((col) => (
                    <th
                      key={col}
                      className="px-2.5 py-4 text-center font-bold text-ink-secondary"
                    >
                      {col}
                    </th>
                  ))}
                  <th className="px-4 py-4 text-right font-bold text-ink-brand">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-subtle">
                {MONOGRAM_PROPOSALS.map((proposal) => {
                  const total = proposal.evaluation.reduce(
                    (acc, cur) => acc + cur.score,
                    0,
                  )
                  return (
                    <tr key={proposal.id}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <MonogramSvg
                            proposal={proposal}
                            mode="bicolor"
                            size={28}
                          />
                          <div>
                            <p className="font-display font-medium text-ink-primary">
                              {proposal.index}. {proposal.name}
                            </p>
                            <p className="text-[11px] text-ink-secondary">
                              {proposal.principle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex justify-center">
                          <MonogramSvg
                            proposal={proposal}
                            mode="ink"
                            size={16}
                          />
                        </div>
                      </td>
                      {proposal.evaluation.map((item) => (
                        <td
                          key={item.criterion}
                          className="px-2.5 py-4 text-center font-sans text-xs font-semibold text-ink-primary"
                        >
                          {item.score}
                        </td>
                      ))}
                      <td className="px-4 py-4 text-right font-sans font-bold text-ink-brand">
                        {total}/40
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </div>
  )
}
