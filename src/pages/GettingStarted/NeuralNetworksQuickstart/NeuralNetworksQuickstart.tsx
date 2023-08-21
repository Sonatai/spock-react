import './styles.css';

import { CustomPage } from '../../../components/shared/CustomPage';
import { SyntaxHighlighter } from '../../../components/shared/SyntaxHighlighter';
import { CustomTab } from '../../../components/shared/Tab/CustomTab';

export const NeuralNetworksQuickstart = () => {
    return (
        <CustomPage>
            <h1 className="nnq__headline">Neural Networks : Quickstart</h1>
            <p className="nnq__description">
                Let&apos;s build a simple neural network !
            </p>
            <h2>1. Configuration</h2>
            <p>
                Before working with tensors it might be useful to configure
                Neureka to fit your needs. Accessing settings can be done as
                follows :
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code="var settings = Neureka.get().settings()"
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code="var settings = Neureka.get().settings();"
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code="var settings = Neureka.get().settings()"
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <p>
                There is a lot of detail to the different types of settings that
                can be adjusted, however let&apos;s just look at the most
                important start configuration :
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code={`Neureka.get().reset() // First we reset everything, just in case! 👍\n// Then we use the following autograd settings :\nNeureka.get().settings().autograd().isApplyingGradientWhenRequested = false\nNeureka.get().settings().autograd().isApplyingGradientWhenTensorIsUsed = false\nNeureka.get().settings().autograd().isRetainingPendingErrorForJITProp = false`}
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code={`Neureka.get().reset(); // First we reset everything, just in case! 👍\n// Then we use the following autograd settings :\nNeureka.get().settings().autograd().setIsApplyingGradientWhenRequested( false );\nNeureka.get().settings().autograd().setIsApplyingGradientWhenTensorIsUsed( false );\nNeureka.get().settings().autograd().setIsRetainingPendingErrorForJITProp( false );`}
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code={`Neureka.get().reset() // First we reset everything, just in case! 👍\n// Then we use the following autograd settings :\nNeureka.get().settings().autograd().isApplyingGradientWhenRequested = false\nNeureka.get().settings().autograd().isApplyingGradientWhenTensorIsUsed = false\nNeureka.get().settings().autograd().isRetainingPendingErrorForJITProp = false`}
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <p>
                You do do not need to know what these settings mean for what
                follows. So now that Neureka is configured properly let&apos;s
                continue with our neural network endeavour :
            </p>
            <h2>2. Devices</h2>
            <p>
                Before getting started with tensors we first have to consider
                the following question : **Where do we want our tensors to be
                stored and executed?** The answer to this question is usually
                quite simple : *By default, they are stored in primitive arrays
                on the JVM, so in your RAM!* However! What if you want them to
                run on your GPU? In that case we have to use the
                &quot;Device&quot; interface to get a device on which our
                tensors ought to live :
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code="var device = Device.any('first gpu') // Returns CPU instance if GPU not found! (Never null)"
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code='var device = Device.any("first gpu"); // Returns CPU instance if GPU not found! (Never null)'
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code='var device = Device.any("first gpu"); // Returns CPU instance if GPU not found! (Never null)'
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <p>
                Devices are components of tensors and tensors are elements of a
                device. Therefore, we can marry instances of these two types via
                the following two ways :
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code="device.store( myTensor )"
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code="device.store( myTensor )"
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code="device.store( myTensor )"
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <p>
                For simplicity reasons the next steps will not include the
                Device type when handling tensors.
            </p>
            <h2>
                Neural networks are known for their hunger for data. So
                let&apos;s prepare a snack :
            </h2>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code={`var X = Tsr.of(\n\t\t\t\t[[0.6667, 1.0000],\n\t\t\t\t[0.3333, 0.5556],\n\t\t\t\t[1.0000, 0.6667]]\n\t\t\t)\nvar y = Tsr.of(\n\t\t\t\t[[0.9200],\n\t\t\t\t[1.0000],\n\t\t\t\t[0.8900]]\n\t\t\t)`}
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code={`var X = Tsr.of(new double[][]{\n\t\t\t\t{0.6667, 1.0000},\n\t\t\t\t{0.3333, 0.5556},\n\t\t\t\t{1.0000, 0.6667}\n\t\t\t});\nvar y = Tsr.of(new double[][]{\n\t\t\t\t{0.9200},\n\t\t\t\t{1.0000},\n\t\t\t\t{0.8900}\n\t\t\t});`}
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code={`val X = Tsr.of(arrayOf(\n\t\t\t\tdoubleArrayOf(0.6667, 1.0000),\n\t\t\t\tdoubleArrayOf(0.3333, 0.5556),\n\t\t\t\tdoubleArrayOf(1.0000, 0.6667)\n\t\t\t))\nval y = Tsr.of(arrayOf(\n\t\t\t\tdoubleArrayOf(0.9200),\n\t\t\t\tdoubleArrayOf(1.0000),\n\t\t\t\tdoubleArrayOf(0.8900)\n\t\t\t))`}
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <p>
                If you want to know more about feeding data into your tensors
                consider looking at the &quot;FileDevice&quot; class.
            </p>
            <h2>4. Weights</h2>
            <p>
                For this network we are going to need 2 weight tensors : First
                we need a 2 by 3 matrix for the weights between the input layer
                and the hidden layer. This weight matrix shall be called `W1`
            </p>
            <p>
                Besides that we then create the second weight tensor which is a
                3 by 1 matrix named `W2`.
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code={`var W1 = Tsr.of(\n\t\t\t\t[[-1.1843,  0.0146, -1.4647],\n\t\t\t\t[-1.4020, -1.0129,  0.6256]]\n\t\t\t)\n\t\t\t.setRqsGradient(true)\nvar W2 = Tsr.of(\n\t\t\t\t[[ 1.8095],\n\t\t\t\t[-0.4269],\n\t\t\t\t[-1.1110]]\n\t\t\t)\n\t\t\t.setRqsGradient(true)`}
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code={`var W1 = Tsr.of(new double[][]{\n\t\t\t\t{-1.1843,  0.0146, -1.4647},\n\t\t\t\t{-1.4020, -1.0129,  0.6256}\n\t\t\t})\n\t\t\t.setRqsGradient(true);\nvar W2 = Tsr.of(new double[][]{\n\t\t\t\t{1.8095},\n\t\t\t\t{-0.4269},\n\t\t\t\t{-1.1110}\n\t\t\t})\n\t\t\t.setRqsGradient(true);`}
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code={`val W1 = Tsr.of(arrayOf(\n\t\t\t\tdoubleArrayOf(-1.1843,  0.0146, -1.4647),\n\t\t\t\tdoubleArrayOf(-1.4020, -1.0129,  0.6256)\n\t\t\t))\n\t\t\t.setRqsGradient(true)\nval W2 = Tsr.of(arrayOf(\n\t\t\t\tdoubleArrayOf(1.8095),\n\t\t\t\tdoubleArrayOf(-0.4269),\n\t\t\t\tdoubleArrayOf(-1.1110)\n\t\t\t))\n\t\t\t.setRqsGradient(true)`}
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <h2>5. Activation Function</h2>
            <p>
                The last setup step is the activation function. For this little
                quickstart we will use the sigmoid activation function 👍
            </p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code="var sig = Function.of('sig(I[0])')"
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code='var sig = Function.of("sig(I[0])");'
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code='var sig = Function.of("sig(I[0])");'
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <h2>6. Finally! A neural network! 😃</h2>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code={`def errors = []\ndef losses = []\n\ndef forwardAndBackward = ( Tsr<Double> x ) ->\n{\n\tdef z1 = x.dot(W1)\n\tdef hidden = sig(z1)\n\tdef z2 = hidden.dot(W2)\n\tdef pred = sig(z2)\n\tdef error = (y - pred)\n\terrors.add(error.toString())\n\tdef loss = (error**2).mean()\n\tlosses.add(loss.toString())\n\tpred.backward(error) // This is where Neurekas autograd magic happens!\n\tW1.applyGradient()\n\tW2.applyGradient()\n\treturn loss\n}`}
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code={`private List errors = new ArrayList<>();\nprivate List losses = new ArrayList<>();\n\npublic Tsr<Double> forwardAndBackward( Tsr<Double> x )\n{\n\tvar z1 = x.dot(W1);\n\tvar hidden = sig.call(z1);\n\tvar z2 = hidden.dot(W2);\n\tvar pred = sig.call(z2);\n\tvar error = y.minus(pred);\n\terrors.add(error.toString());\n\tvar loss = error.power(2).mean();\n\tlosses.add(loss.toString());\n\tpred.backward(error); // This is where Neurekas autograd magic happens!\n\tW1.applyGradient();\n\tW2.applyGradient();\n\treturn loss;\n}`}
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code={`val errors = new ArrayList<>()\nval losses = new ArrayList<>()\n\nfun forwardAndBackward( x : Tsr<Double> ) : Tsr<Double>\n{\n\tval z1 = x.dot(W1)\n\tval hidden = sig(z1)\n\tval z2 = hidden.dot(W2)\n\tval pred = sig.call(z2)\n\tval error = y.minus(pred)\n\terrors.add(error.toString())\n\tval loss = error.power(2).mean()\n\tlosses.add(loss.toString())\n\tpred.backward(error) // This is where Neurekas autograd magic happens!\n\tW1.applyGradient()\n\tW2.applyGradient()\n\treturn loss\n}`}
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
            <h2>7. Training</h2>
            <p>7. Training Let&apos;s train it over 100 epochs :</p>
            <CustomTab
                tabConfigs={[
                    {
                        header: 'Groovy',
                        content: (
                            <SyntaxHighlighter
                                code={`100.times {\n\tvar loss = forwardAndBackward(X)\n\tprintln(loss)\n }`}
                                language="groovy"
                            />
                        ),
                    },
                    {
                        header: 'Java',
                        content: (
                            <SyntaxHighlighter
                                code={`for ( int i = 0; i < 100; i++ ) {\n\tTsr<Double> loss = forwardAndBackward(X);\n\tSystem.out.println(loss);\n}`}
                                language="java"
                            />
                        ),
                    },
                    {
                        header: 'Kotlin',
                        content: (
                            <SyntaxHighlighter
                                code={`for (i in 1..100)  {\n\tval loss = forwardAndBackward(X)\n\tprintln(loss)\n}`}
                                language="kotlin"
                            />
                        ),
                    },
                ]}
            />
        </CustomPage>
    );
};
