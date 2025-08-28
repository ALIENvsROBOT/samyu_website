import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <Container>
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="px-8">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to my creative space. Here you'll find a collection of my work
              spanning photography, creative projects, and professional endeavors.
              Each piece represents a unique story and creative vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services tailored to bring your creative vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Photography",
                description: "Professional photography services for portraits, events, and creative projects.",
              },
              {
                title: "Creative Direction",
                description: "Artistic direction and creative consulting for your projects and campaigns.",
              },
              {
                title: "Content Creation",
                description: "Custom content creation including digital art, graphics, and multimedia.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next creative project? I'd love to hear about your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8">
                Contact Me
              </Button>
              <div className="flex gap-4">
                {siteConfig.contact.socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg">
                      {social.platform}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
