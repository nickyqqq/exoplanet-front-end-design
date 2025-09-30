import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Database, Sparkles, BarChart3, Settings, Telescope } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Data Upload",
      description: "Upload CSV files or manually enter exoplanet parameters for classification.",
      link: "/upload"
    },
    {
      icon: Database,
      title: "Custom Datasets",
      description: "Manage and upload your own datasets for model fine-tuning.",
      link: "/datasets"
    },
    {
      icon: Sparkles,
      title: "Prediction",
      description: "Classify exoplanets using XGBoost or Deep Neural Network models.",
      link: "/predict"
    },
    {
      icon: BarChart3,
      title: "Visualization",
      description: "Explore folded light curves, feature importance, and diagnostic metrics.",
      link: "/visualize"
    },
    {
      icon: Settings,
      title: "Fine-Tuning",
      description: "Customize models with hyperparameter tuning and user-provided training data.",
      link: "/fine-tune"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 px-4 gradient-space">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Telescope className="h-20 w-20 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Exoplanet Classification Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced machine learning tools for exoplanet candidate classification. 
            Analyze transit data, fine-tune models, and visualize results with precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/upload">
              <Button size="lg" className="transition-smooth hover:scale-105">
                Get Started
              </Button>
            </Link>
            <Link to="/predict">
              <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
                Try Prediction
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} to={feature.link}>
                <Card className="h-full transition-smooth hover:scale-105 hover:border-primary cursor-pointer">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About This Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This platform provides state-of-the-art machine learning tools for classifying 
                exoplanet candidates from transit photometry data. Built for researchers and 
                enthusiasts alike, it offers both XGBoost and Deep Neural Network models.
              </p>
              <p>
                Key capabilities include automated feature extraction from light curves, 
                customizable model fine-tuning with your own datasets, comprehensive 
                hyperparameter optimization, and rich visualizations for model interpretation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
