import { Page, Button, Card, Text } from "@geist-ui/core";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export const App = () => {
  return (
    <Page className="w-screen!">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        className="py-20 text-center max-w-4xl mx-auto"
      >
        <h1>
          Hi, I'm{" "}
          <span className="text-[rgb(0,166,177)]!">Patrick O'Connor</span>
        </h1>

        <p className="mt-6! text-lg! text-silence!">
          Engineering in the cloud bringing cutting-edge AI research and
          transformative product experiences through rapid experimentation and
          breakthrough prototype development
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center gap-x-6"
        >
          <a
            href="https://aws.amazon.com/podcasts/innovation-ambassadors/?podcasts-cards.q=Patrick"
            target="__blank"
          >
            <Button
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              className="text-white!"
            >
              Listen to what I do
            </Button>
          </a>

          <a href="mailto:oconpa@gmail.com">
            <Button
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              className="text-white!"
            >
              Get in touch
            </Button>
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true }}
        className="py-10 bg-[rgb(12,12,12)]"
      >
        <h2 className="text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-silence! mb-4!">
              I'm a Senior AI Prototyping Engineer at AWS, where I build
              cutting-edge generative AI solutions and end-to-end prototypes in
              the cloud
            </p>

            <p className="text-silence! mb-4!">
              My specialty lies in implmenting large language models and
              distributed AI systems, while bringing expertise in IoT,
              serverless technologies and high-performance computing to solve
              complex enterprise challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>ML/AI Development</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Full-Stack Development</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>UI/UX Design</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>IoT/HPC/DC/DFS</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center">Features</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delayChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Card>
              <Text h4>Embodied AI Chess with Bedrock</Text>

              <Text className="text-silence!">
                An interactive chess application that leverages GenAI models
                hosted on Amazon Bedrock, featuring both 2D and 3D user
                interfaces and IoT connectivity options
              </Text>

              <Card.Footer className="flex flex-col items-start!">
                <a
                  href="https://aws.amazon.com/blogs/machine-learning/embodied-ai-chess-with-amazon-bedrock/"
                  target="__blank"
                >
                  Blog
                </a>
                <a
                  href="https://github.com/aws-samples/embodied-chess-demo-with-amazon-bedrock"
                  target="__blank"
                >
                  Code
                </a>
                <a
                  href="https://www.linkedin.com/posts/oconpa_aws-genai-nvidiagtc-activity-7180802211780689921-W3S3"
                  target="__blank"
                >
                  NVidia GTC 2024
                </a>
              </Card.Footer>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Card>
              <Text h4>
                Build efficient, cross-Regional, I/O-intensive workloads with
                Dask on AWS
              </Text>

              <Text className="text-silence!">
                Perform I/O intensive workloads on high-volume data sparsely
                located across multiple AWS regions through the use of Dask
              </Text>

              <Card.Footer className="flex flex-col items-start!">
                <a
                  href="https://aws.amazon.com/blogs/big-data/build-efficient-cross-regional-i-o-intensive-workloads-with-dask-on-aws/"
                  target="__blank"
                >
                  Blog
                </a>
                <a
                  href="https://github.com/aws-solutions-library-samples/distributed-compute-on-aws-with-cross-regional-dask"
                  target="__blank"
                >
                  Code
                </a>
              </Card.Footer>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Card>
              <Text h4>
                Ensuring media authenticity, traceability, and integrity by
                running C2PA on AWS
              </Text>

              <Text className="text-silence!">
                This Guidance demonstrates how to run the Coalition for Content
                Provenance and Authenticity (C2PA) standard for tracking
                provenance with media workloads on AWS
              </Text>

              <Card.Footer className="flex flex-col items-start!">
                <a
                  href="https://aws.amazon.com/blogs/media/ensuring-media-authenticity-traceability-and-integrity-by-running-c2pa-on-aws/"
                  target="__blank"
                >
                  Blog
                </a>
                <a
                  href="https://github.com/aws-solutions-library-samples/guidance-for-media-provenance-with-c2pa-on-aws"
                  target="__blank"
                >
                  Code
                </a>
              </Card.Footer>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Socials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 py-10 text-center bg-[rgb(12,12,12)]"
      >
        <h2>Socials</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6 justify-center flex-col md:flex-row"
        >
          <a href="mailto:oconpa@gmail.com">
            <Button
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              <Mail />
              <span className="ml-1.5">Email Me</span>
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/oconpa/" target="__blank">
            <Button
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              <Linkedin />
              <span className="ml-1.5">LinkedIn</span>
            </Button>
          </a>

          <a href="https://github.com/oconpa" target="__blank">
            <Button
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              <Github />
              <span className="ml-1.5">GitHub</span>
            </Button>
          </a>
        </motion.div>
      </motion.section>
    </Page>
  );
};
