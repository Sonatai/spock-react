import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
    faComputer,
    faFileExport,
    faWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Layout } from '../components/shared/Layout/Layout';
import { CustomTab } from '../components/shared/Tab/CustomTab';
import { useScrollUp } from '../Hooks/useScrollUp';

const groovySnippet = {
    content: (
        <SyntaxHighlighter language="groovy" style={dracula} showLineNumbers>
            {`var x = Tsr.of(3d).setRqsGradient(true)\nvar b = Tsr.of(-4d)\nvar w =Tsr.of(2d)\nvar y = ((x+b)*w)**2 y.backward(1)\n// x.getGradient(): "(1):[-8]"`}
        </SyntaxHighlighter>
    ),
    header: 'Groovy',
};

const JavaSnippet = {
    content: (
        <SyntaxHighlighter language="java" style={dracula} showLineNumbers>
            {`var x = Tsr.of(3d).setRqsGradient(true)\nvar b = Tsr.of(-4d);\nvar w = Tsr.of(2d);\nvar y = Tsr.of("((i0+i1)*i2)^2", x, b, w);\ny.backward(1);\n// x.getGradient(): "(1):[-8]"`}
        </SyntaxHighlighter>
    ),
    header: 'Java',
};

const KotlinSnippet = {
    content: (
        <SyntaxHighlighter language="kotlin" style={dracula} showLineNumbers>
            {`val x = Tsr.of(3.0).setRqsGradient(true)\nval b = Tsr.of(-4.0)\nval w = Tsr.of(2.0)\nval y = Tsr.of("((i0+i1)*i2)^2", x, b, w)\ny.backward(1.0)\n// x.getGradient(): "(1):[-8]"`}
        </SyntaxHighlighter>
    ),
    header: 'Kotlin',
};

export const Home = (): JSX.Element => {
    useScrollUp();

    return (
        <Layout>
            <h1 className="text-center mb-4">Neureka</h1>
            <p className="text-center mb-12 text-lg italic">
                A lightweight open source platform independent nd-array library
                for the JVM
            </p>

            <div className="flex justify-center">
                <div className="mr-2">
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon={faFileExport}
                            className="text-claret text-5xl"
                        />
                    </div>
                    <div className="text-center text-sm">
                        Platform independent, extendable and compatible with any
                        JVM language
                    </div>
                </div>
                <div className="mr-2">
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon={faWandSparkles}
                            className="text-claret text-5xl"
                        />
                    </div>
                    <div className="text-center text-sm">
                        Completely open-source and free to use, MIT-Licenced
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon={faComputer}
                            className="text-claret text-5xl"
                        />
                    </div>
                    <div className="text-center text-sm">
                        Vendor agnostic GPU acceleration through OpenCl
                    </div>
                </div>
            </div>

            <h2 className="text-center">Why Neureka?</h2>
            <p className="mb-4">
                Not only is it a flexible nd-array library for general purpose
                use, but also a tensor library for doing deep learning.
            </p>
            <p className="mb-8">
                Neureka trains your neural network using a computation graph
                recorder. This is contrary to the approaches found in other
                frameworks such as TensorFlow, Theano, Caffe, and CNTK which
                require the definition of a computation graph ahead of time.
            </p>
            <div className="flex">
                <img src="https://gleethos.github.io/neureka/src/img/archimedes.jpg" />
                <p>
                    In that case a developer has to build a neural network
                    structure which cannot change during runtime. Neureka on the
                    other hand uses the recorded computation graph in order to
                    apply a technique called reverse-mode auto-differentiation.
                    This technique allows your network structure to change
                    during runtime arbitrarily with zero lag or overhead. This
                    powerful feature was inspired by PyTorch which also uses a
                    dynamic computation graph to achieve such a high degree of
                    flexibility.
                </p>
            </div>

            <h2 className="text-center">Why Java?</h2>
            <p>
                Although Java is a robust and safe language, it is often times
                considered to be too verbose and explicit for simple prototyping
                or more explorative workloads... Therefore popular machine
                learning and tensor / deep learning libraries rely on python,
                which in many cases offers a more concise syntax. So one might
                come to wonder, why would anybody ever build a deep learning
                library for Java? The answer is simple!
            </p>
            <p>
                Nobody did! This library was written for all JVM-languages,
                namely: Groovy, Kotlin, Scala, and Jython just to name a few.
                Take a look at the following examples side by side! Neureka can
                be integrated by any language which compiles to, or understands
                JVM bytecode!
            </p>
            <CustomTab
                tabConfigs={[groovySnippet, JavaSnippet, KotlinSnippet]}
            />
            <div>
                Both code snippets express the following equations
                <ul>
                    <li>f(x) = ((x-4)*2)^2 | f(3) = 4</li>
                    <li>f(x)' = 8 * x - 32 | f(3)' = -8</li>
                </ul>
            </div>
            <p>
                Neurekas API is designed to enable operator overloading in
                certain languages based on carefully chosen method names which
                will be translated to operators. This makes it possible to use
                tensors in mathematical expression in both Groovy and Kotlin to
                allow for rapid prototyping and highly readable math heavy
                code...
            </p>
            <ul>
                <li>+ : plus(...)</li>
                <li>- : minus(...)</li>
                <li>* : times(...)</li>
                <li>/ : divide(...)</li>
                <li>...</li>
            </ul>
            <p>
                If you prefer fast prototyping with Jupyter, then Neureka can be
                used there too. <a href="http://beakerx.com/">BeakerX</a> is a
                jupyter extension that supports many JVM languages like Groovy,
                Scala, Clojure, Kotlin and Java.
            </p>

            <h2 className="text-center">Performance</h2>
            <p>
                Not only are the operations within the default backend
                implemented as generalized, modular and concise as possible,
                they are also optimized for multi-threading and specifically
                designed to be auto-vectorizable by the JVM into SIMD machine
                code instructions. However performance wise Neureka still has
                lots of room for improvement, but because it is a lightweight
                and highly extensible library with a consistent API designed to
                allow for the support of any backend, you can easily go the
                extra mile to improve performance for your specific use case.
                like for example implementing a more specialized kind of OpenCL
                kernel for convolution... Currently Neureka is mostly held back
                by the JVM's lack of allowing for more memory localized types
                and also a lack of an API for consistent SIMD vectorization.{' '}
                <a href="https://openjdk.org/jeps/338">
                    (...take a look at the upcoming vector API...)
                </a>{' '}
                This upcoming vector API alongside the introduction of
                inline/value types from Project-Valhalla will greatly benefit
                the performance of Neureka as well as improve Machine Learning
                on the JVM in general.
            </p>
        </Layout>
    );
};
