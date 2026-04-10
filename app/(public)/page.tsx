import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Brain,
  CheckCircle,
  ChevronDown,
  Clock,
  Code,
  Crown,
  GraduationCap,
  Laptop,
  Play,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getAllCourses } from "../data/course/get-all-courses";
import { PublicCourseCard } from "./_components/PublicCourseCard";

const testimonials = [
  {
    name: "Marina Silva",
    role: "Frontend Engineer @ Spotify",
    avatar: "MS",
    content:
      "O curso de React me levou de junior para senior em 6 meses. O conteúdo é denso e prático.",
    rating: 5,
  },
  {
    name: "Lucas Mendes",
    role: "Product Designer @ Figma",
    avatar: "LM",
    content:
      "Finalmente um curso de UI/UX que vai direto ao ponto. Aprendi mais aqui que em 2 anos de faculdade.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "CTO @ Startup",
    avatar: "JC",
    content:
      "Recomendei para toda minha equipe. ROI absurdo em menos de 30 dias.",
    rating: 5,
  },
];

const stats = [
  { value: "50K+", label: "Alunos", icon: Users },
  { value: "200+", label: "Cursos", icon: BookOpen },
  { value: "98%", label: "Satisfação", icon: Trophy },
  { value: "24h", label: "Suporte", icon: Clock },
];

const features = [
  {
    icon: Crown,
    title: "Certificado Premium",
    description: "Reconhecido no mercado",
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Estude no seu ritmo",
  },
  {
    icon: Laptop,
    title: "Mobile First",
    description: "Aprenda em qualquer lugar",
  },
  {
    icon: Brain,
    title: "Atualizações",
    description: "Conteúdo sempre fresco",
  },
];

const faqs = [
  {
    question: "Funciona offline?",
    answer:
      "Sim! Baixe as aulas e assista sem internet. Acesso vitalício incluso.",
  },
  {
    question: "Garantia?",
    answer: "7 dias de garantia incondicional. Não gostou? Devolvemos 100%.",
  },
  {
    question: "Certificado é válido?",
    answer:
      "Sim. Nossos certificados são reconhecidos por empresas como Google, Meta e Amazon.",
  },
  {
    question: "Posso cancelar?",
    answer: "Sem burocracia. Cancele quando quiser, sem pegadinha.",
  },
];

export default async function LandingPage() {
  const courses = await getAllCourses();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-10 lg:pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                <span>Novos cursos toda semana</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Aprenda skills que{" "}
                <span className="text-primary">mudam careers</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Código. Design. Estratégia. Tudo que você precisa para crescer
                na carreira, em um só lugar.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2">
                  <Play className="h-4 w-4" />
                  Ver cursos
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Como funciona
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {["MA", "LM", "JC", "FA"].map((initials, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    4.9/5 · 12.847 avaliações
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Learning"
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">+2,847</p>
                    <p className="text-xs text-muted-foreground">
                      novos alunos hoje
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-64 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -right-64 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Cursos em destaque
              </h2>
              <p className="mt-2 text-muted-foreground">
                Os mais procurados pelos nossos alunos
              </p>
            </div>
            <Button variant="link" className="gap-1.5 text-primary">
              Ver todos
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              return <PublicCourseCard data={course} key={course.id} />;
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Por que escolher a LMS?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Simples. Eficiente. Prático.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="border-0 bg-background shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              O que dizem nossos alunos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 text-primary-foreground">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="mb-4 bg-white/10 text-white border-0"
              >
                <CheckCircle className="h-3 w-3 mr-1" />
                Garantia de 7 dias
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Comece hoje. Cancele quando quiser.
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Acesso ilimitado a todos os cursos por uma mensalidade fixa. Sem
                surpresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Code className="h-4 w-4" />
                  Começar período teste
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <Collapsible className="px-4 space-y-1">
                  <CollapsibleTrigger
                    className={"w-full items-center flex justify-between"}
                  >
                    {faq.question}
                    <ChevronDown />
                  </CollapsibleTrigger>
                  <CollapsibleContent>{faq.answer}</CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            Receba novidades em primeira mão
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Cupons exclusivos e novos cursos, direto no seu e-mail.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              className="flex-1"
            />
            <Button>Inscrever</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">LMS</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Termos
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacidade
              </Link>
              <Link href="#" className="hover:text-foreground">
                Contato
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LMS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
