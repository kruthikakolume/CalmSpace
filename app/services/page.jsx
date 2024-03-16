"use client";
import { Accordion } from "flowbite-react";

const Services = () => {
  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2
            className="heading-secondary text-center"
            style={{ color: "white" }}
          >
            Services
          </h2>
        </div>
      </div>

      {/* Services */}
      <section className="py-[9.6rem]">
        <div className="max-w-[120rem] py-[3rem] mx-auto px-[2rem] xl:px-0">
          <span class="subheading">How it works</span>
          <h2 class="heading-secondary">How can we help you?</h2>
        </div>

        <div class="max-w-[120rem] py-[3rem] md:py-0 mx-auto px-[2rem] xl:px-0 d-grid grid-cols-1 md:grid-cols-2 grid--center-v">
          <div class="step-text-box">
            <p class="step-number">01</p>
            <h3 class="heading-tertiary">Assessment and Support Evaluation</h3>
            <p class="step-description">
              At the outset, we perform an in-depth evaluation of each person's
              mental health and well-being requirements. Our specialized team
              identifies the unique obstacles and pressures they encounter at
              work, laying the groundwork for customized support plans.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/1.svg"
              alt="Picture"
              class="step-image"
            />
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-image-box">
            <img
              src="/assets/images/home/2.svg"
              alt="Picture"
              class="step-image"
            />
          </div>
          <div class="step-text-box">
            <p class="step-number">02</p>
            <h3 class="heading-tertiary">Personalized Well-being Plans</h3>
            <p class="step-description">
              Drawing from the assessment findings, we craft customized
              well-being strategies. These strategies encompass various
              measures, including stress-reduction methods, resilience-enhancing
              activities, and mental health support. Tailored to meet each
              individual's specific needs, our plans are aimed at fostering
              their holistic mental wellness.
            </p>
          </div>

          <div className="mb-20 md:hidden"></div>

          <div class="step-text-box">
            <p class="step-number">03</p>
            <h3 class="heading-tertiary">Ongoing Support and Resources</h3>
            <p class="step-description">
              Recognizing that well-being is a continuous process, we provide
              ongoing assistance through our services, which encompass access to
              mental health experts, various workshops, and a wealth of
              educational materials. Our goal is to equip individuals with the
              necessary resources and insights to nurture their mental health
              and excel in their professional lives.
            </p>
          </div>
          <div class="step-image-box">
            <img
              src="/assets/images/home/3.svg"
              alt="Picture"
              class="step-image"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primaryLight ">
        <div className="p-[12rem]">
          <div className="mb-40 lg:mb-0">
            <span className="subheading">Testimonials</span>
            <h2 className="heading-secondary">
              Transformative Tales: Client Reflections from CalmSpace
            </h2>
          </div>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                src="/assets/images/home/dave.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Since integrating CalmSpace into our daily routine, we've
                noticed a remarkable improvement in team morale and
                productivity. It's like a breath of fresh air for our work
                environment.
              </blockquote>

              <p className="testimonial-name">&mdash; Alex J.</p>
              <p className="text-[1.4rem] mt-2">Tech Startup CEO</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/ben.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                CalmSpace has been a game-changer for our company. The tailored
                programs addressed our specific challenges, fostering a more
                supportive and understanding workplace culture.
              </blockquote>

              <p className="testimonial-name">&mdash; Kevin R.</p>
              <p className="text-[1.4rem] mt-2">HR Manager</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/steve.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                The expert advice and innovative tools provided by CalmSpace
                have equipped our employees with the skills they need to manage
                stress effectively. We've seen a significant decrease in burnout
                rates.
              </blockquote>

              <p className="testimonial-name">&mdash; Michael T.</p>
              <p className="text-[1.4rem] mt-2">Operations Director</p>
            </figure>

            <figure className="testimonial">
              <img
                src="./assets/images/home/hannah.webp"
                alt="Dave Image"
                className="testimonial-img"
              />

              <blockquote className="testimonial-text">
                Implementing CalmSpace's strategies has not only boosted our
                team's well-being but also our bottom line. It's impressive how
                much of a difference a positive mental health environment can
                make.
              </blockquote>

              <p className="testimonial-name">&mdash; Linda H.</p>
              <p className="text-[1.4rem] mt-2">Business Owner</p>
            </figure>
          </div>
        </div>
      </section>

      {/* Faq's */}
      <section className="pt-[2.4rem] pb-[6.4rem] lg:pt-[4.8rem] lg:pb-[9.6rem]">
        <div className="text-center">
          <span className="subheading">FAQ</span>
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-6xl mx-auto px-[2rem] xl:px-0">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                What services does CalmSpace offer?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    CalmSpace offers a comprehensive suite of services designed
                    to enhance workplace well-being, including personalized
                    mental health programs, stress management workshops,
                    mindfulness training sessions, and access to a range of
                    digital wellness tools. Our aim is to equip your team with
                    the resources and skills necessary for fostering a
                    supportive and productive work environment.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                How does CalmSpace tailor its programs to fit individual company
                needs?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    Our approach begins with a thorough assessment of your
                    company's unique culture, challenges, and goals. Based on
                    this analysis, we craft customized well-being solutions that
                    align with your specific requirements. We also continuously
                    adapt our programs based on feedback and evolving needs to
                    ensure maximum effectiveness and satisfaction.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
              <Accordion.Title className="text-[2rem] text-[#333]">
                Can CalmSpace's programs be integrated into remote work
                environments?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-600 text-[1.4rem]">
                  <p>
                    Absolutely. CalmSpace is designed to be flexible and
                    accessible, making it ideal for both in-office and remote
                    work settings. Our digital platform and virtual workshops
                    ensure that all employees, regardless of their location, can
                    benefit from our mental health and well-being resources.
                  </p>
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Services;
