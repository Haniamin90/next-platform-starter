import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';
import Link from 'next/link';

export const metadata = {
    title: 'Top 5 Pest Control Companies in Dubai | PestMan Pest Control',
    description:
        'Discover the top 5 pest control companies in Dubai, led by PestMan Pest Control. Offering eco-friendly, municipality-approved pest control Dubai services for homes and businesses.',
    keywords: 'pest control Dubai, PestMan pest control, cockroach control Dubai, bed bug exterminator Dubai, rodent control Dubai, top pest control companies Dubai',
    authors: [{ name: 'PestMan Pest Control' }],
    robots: 'index, follow',
};

const explainer = `
Dubai’s hot and humid climate creates ideal conditions for pests like cockroaches, bed bugs, rodents, and ants. **[Professional Pest Control Dubai](https://uaepestman.com/pest-control-dubai/)** services ensure safe, effective, and long-lasting solutions tailored to the UAE’s unique challenges. Below, we list the top 5 pest control companies in Dubai, with **PestMan Pest Control** leading the way for pest control Dubai excellence.
`;

export default async function Page() {
    return (
        <>


            {/* Hero Section */}
            <section className=" text-white py-20 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Top 5 Pest Control Companies in Dubai
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Led by PestMan Pest Control – Your Trusted Experts for Pest Control Dubai
                    </p>
                    <a
                        href="tel:+971565407666"
                        className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
                    >
                        Call Now
                    </a>
                    <a
                        href="https://wa.me/+971565407666"
                        className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 ml-4"
                    >
                        WhatsApp
                    </a>
                </div>
            </section>

            {/* Main Content */}
            <main className="container mx-auto py-12">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose Professional Pest Control in Dubai?
                    </h2>
                    <Markdown content={explainer} className="text-lg text-gray-200 text-center max-w-3xl mx-auto" />
                </section>

                {/* Top 5 Pest Control Companies */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Top 5 Pest Control Companies in Dubai
                    </h2>
                    <div className="space-y-8">
                        {/* #1 PestMan */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">
                                1. PestMan Pest Control
                            </h3>
                            <p className="text-gray-700 mb-4">
                                PestMan Pest Control is the leading provider of{' '}
                                <strong>
                                    <Link href="https://uaepestman.com/pest-control-dubai/" className="text-green-600 hover:underline">
                                        pest control Dubai
                                    </Link>
                                </strong>{' '}
                                services, offering over 15 years of experience and municipality-approved solutions. Specializing in
                                residential, commercial, and specialized pest control, PestMan uses eco-friendly, odorless pesticides and
                                the Integrated Pest Management (IPM) system for sustainable results. From cockroach control to termite
                                prevention, PestMan ensures a pest-free environment with a 100% satisfaction guarantee.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Services: Cockroach control, bed bug extermination, rodent control, termite treatment, mosquito control</li>
                                <li>Why Choose: Dubai Municipality certified, eco-friendly solutions, 24/7 emergency services</li>
                                <li>
                                    Contact:{' '}
                                    <a href="tel:+971565407666" className="text-green-600 hover:underline">
                                        +971 565 407 666
                                    </a>{' '}
                                    |{' '}
                                    <a href="https://wa.me/+971565407666" className="text-green-600 hover:underline">
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    Website:{' '}
                                    <Link href="https://uaepestman.com" className="text-green-600 hover:underline">
                                        Pest Control Dubai
                                    </Link>
                                </li>
                            </ul>
                            <Link
                                href="https://uaepestman.com"
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Visit PestMan for Pest Control Dubai
                            </Link>
                        </div>

                        {/* #2 Al Rasa */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">2. Al Rasa Pest Control</h3>
                            <p className="text-gray-700 mb-4">
                                Established in 2007, Al Rasa Pest Control is a Dubai Municipality-approved company offering eco-friendly
                                pest control for homes and businesses. They specialize in ants, cockroaches, bed bugs, rodents, and
                                termites, using gel-baiting and IPM for effective, affordable solutions.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Services: Cockroach control, bed bug treatment, rodent control, termite control, fly management</li>
                                <li>Why Choose: Affordable rates, warranty on services, municipality certified</li>
                                <li>
                                    Contact:{' '}
                                    <a href="tel:+971551492026" className="text-green-600 hover:underline">
                                        +971 55 149 2026
                                    </a>
                                </li>
                                <li>
                                    Website:{' '}
                                    <a href="https://www.alrasapestcontrol.ae" className="text-green-600 hover:underline">
                                        alrasapestcontrol.ae
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* #3 Rentokil Boecker */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">3. Rentokil Boecker</h3>
                            <p className="text-gray-700 mb-4">
                                With over 20 years in Dubai, Rentokil Boecker provides innovative, municipality-approved pest control,
                                focusing on commercial sectors like hospitality and food & beverage. Their tailored solutions ensure safety
                                and compliance for cockroaches, bed bugs, termites, and rodents.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Services: Insect, bird, and rodent control, food safety, hygiene solutions</li>
                                <li>Why Choose: Industry-specific expertise, sustainable practices</li>
                                <li>Contact: Available via website</li>
                                <li>
                                    Website:{' '}
                                    <a href="https://www.rentokil-boecker.com" className="text-green-600 hover:underline">
                                        rentokil-boecker.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* #4 The Healthy Home */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">4. The Healthy Home</h3>
                            <p className="text-gray-700 mb-4">
                                The Healthy Home offers eco-friendly and traditional pest control in Dubai, certified by Dubai Municipality
                                and NPMA. They use organic, plant-based treatments for low-level infestations and chemical solutions for
                                severe cases, ensuring safety for families and pets.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Services: Bed bug eradication, cockroach control, ant control, termite treatment</li>
                                <li>Why Choose: Organic treatment options, family-safe solutions</li>
                                <li>
                                    Contact:{' '}
                                    <a href="tel:80072648493" className="text-green-600 hover:underline">
                                        800 72648493
                                    </a>
                                </li>
                                <li>
                                    Website:{' '}
                                    <a href="https://thehealthyhome.me" className="text-green-600 hover:underline">
                                        thehealthyhome.me
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* #5 Al Mobidoon */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">5. Al Mobidoon Pest Control Services</h3>
                            <p className="text-gray-700 mb-4">
                                Al Mobidoon, an A-grade Dubai Municipality-approved company, serves high-profile clients like Dubai Mall.
                                They provide sustainable pest control using IPM, covering cockroaches, ants, termites, and even snake
                                control, with a focus on long-term prevention.
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li>Services: Pest control, fumigation, snake control, bird control, termite control</li>
                                <li>Why Choose: High-profile clientele, comprehensive pest solutions</li>
                                <li>Contact: Available via website</li>
                                <li>Website: Not listed; contact through Dubai Municipality channels</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why PestMan Stands Out */}
                <section className="bg-green-50 p-8 rounded-lg mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6  text-black">
                        Why PestMan is Dubai’s #1 Choice for Pest Control Dubai
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <i className="fas fa-shield-alt text-4xl text-green-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2  text-black">Municipality Approved</h3>
                            <p className="text-gray-700">
                                Certified by Dubai, Abu Dhabi, and Sharjah municipalities for safe, compliant services.
                            </p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-leaf text-4xl text-green-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2  text-black">Eco-Friendly Solutions</h3>
                            <p className="text-gray-700">
                                Safe, odorless pesticides protect your family, pets, and the environment.
                            </p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-check-circle text-4xl text-green-600 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2  text-black">Guaranteed Results</h3>
                            <p className="text-gray-700">
                                Effective pest elimination or we return at no cost.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Get a Pest-Free Home or Business with Pest Control Dubai
                    </h2>
                    <p className="text-lg text-gray-100 mb-6">
                        Contact{' '}
                        <Link href="https://uaepestman.com" className="text-green-600 hover:underline">
                            Pest Control Dubai
                        </Link>{' '}
                        for expert services across Dubai. Available 24/7 for emergencies.
                    </p>
                    <a
                        href="tel:+971565407666"
                        className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700"
                    >
                        Call Now
                    </a>
                    <a
                        href="https://wa.me/+971565407666"
                        className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 ml-4"
                    >
                        WhatsApp
                    </a>
                </section>

            </main>

        </>
    );
}
