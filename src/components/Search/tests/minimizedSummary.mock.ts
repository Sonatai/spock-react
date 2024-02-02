import { IMinimizedSummaryEntry } from 'spock-react/components/search-types';

export const mockedMinimizedSummary: IMinimizedSummaryEntry[] = [
    {
        className: 'Example_Spec.Example_Spec',
        narrative:
            'Hello and welcome to the example / template specification of this project.\n    This is a simple introduction as to how to get started writing Spock specifications.\n\n    Spock works on top of Groovy which is in essence a syntactic super-set of Java.\n    That means that one can write Java code in Groovy, and 99% of the time it will \n    work the exact same way.',
        title: 'An Introduction to writing Spock Specifications',
        features: [
            { id: 'Call me feature not unit test!' },
            {
                id: 'I am readable and also best practice!',
            },
            {
                id: 'Numbers to the power of two with a fancy data table!',
            },
            { id: 'Should be able to remove from list' },
            { id: 'iAmNotSoReadable' },
        ],
    },
    {
        className: 'it.Calculus_Stress_Test',
        narrative: '',
        title: 'Calculus Stress Test',
        features: [
            {
                id: 'Activation functions work across types, on large prime sized 1D slices and non sliced 1D tensors.',
            },
            {
                id: 'Activation functions work across types.',
            },
            {
                id: 'Dot operation stress test runs error free and produces expected result',
            },
            {
                id: 'Stress test runs error free and produces expected result',
            },
            {
                id: 'The broadcast operation stress test runs error free and produces expected result',
            },
        ],
    },
    {
        className: 'it.Cross_Device_Sliced_Tensor_System_Test',
        narrative: '',
        title: 'Cross Device Tensor Slicing',
        features: [
            {
                id: 'Cross device sliced tensor integration test runs without errors.',
            },
            {
                id: 'Slices can be created using the SliceBuilder.',
            },
        ],
    },
    {
        className: 'it.Eleven_Lines_NN_System_Spec',
        narrative:
            'This system test specification uses the following Numpy\n    code as reference implementation for the equivalent in Neureka\n    or similar implementations and variations.\n    The code below is a simple neural network in only 11 lines of code.\n\n    ´´´\n        X = np.array([ [0,0,1],[0,1,1],[1,0,1],[1,1,1] ])\n        y = np.array([[0,1,1,0]]).T\n        W1 = 2*np.random.random((3,4)) - 1\n        W2 = 2*np.random.random((4,1)) - 1\n        for j in xrange(60000):\n            l1 = 1/(1+np.exp(-(np.dot(X,W1))))\n            l2 = 1/(1+np.exp(-(np.dot(l1,W2))))\n            l2_delta = (y - l2)*(l2*(1-l2))\n            l1_delta = l2_delta.dot(W2.T) * (l1 * (1-l1))\n            W2 += l1.T.dot(l2_delta)\n            W1 += X.T.dot(l1_delta)\n    ´´´',
        title: 'NN Code Golfing!',
        features: [
            {
                id: 'One can write a simple double based neural network in less than 11 lines of java like code using the "@" operator!',
            },
            {
                id: 'One can write a simple float based neural network in less than 11 lines of java like code!',
            },
            {
                id: 'One can write a simple neural network in less than 11 lines of code!',
            },
            {
                id: 'One can write a simple neural network with custom back-prop in 11 lines of code!',
            },
            {
                id: 'The pseudo random number generator works as expected for the weights used in the 11 line NN examples!',
            },
        ],
    },
    {
        className: 'st.Benchmark_System_Test',
        narrative: '',
        title: 'Benchmark System',
        features: [
            {
                id: 'Tensor can be constructed by passing List instances.',
            },
            {
                id: 'Test benchmark script and simple tensor constructor.',
            },
        ],
    },
    {
        className: 'st.NN_Concepts_Spec',
        narrative:
            'This specification is intended to showcase some basic building blocks of \n    various neural network architectures.',
        title: 'Examining Neural Network Architecture Snippets',
        features: [
            {
                id: 'The attention mechanism (found in the commonly known transformer) demonstrated.',
            },
        ],
    },
    {
        className: 'st.Training_NNs_Spec',
        narrative:
            'When designing larger neural network architectures, what you would usually do is\n    to create a class that represents the whole model (which itself might be composed\n    of smaller models). \n\n    This class would then represent something that can be executed and then trained.\n    This Specification shows how to instantiate, execute and train various \n    pre-defined example neural network models.',
        title: 'Training a Neural Network Class',
        features: [
            {
                id: 'A simple 3 layer neural network converges.',
            },
            {
                id: 'A very simple 1 layer NN converges.',
            },
            {
                id: 'We can run the attention head test model.',
            },
        ],
    },
    {
        className: 'ut.autograd.AD_And_Computation_Graph_Spec',
        narrative: '',
        title: 'AD and Computation Graph',
        features: [
            {
                id: 'Payloads and derivatives are null after garbage collection.',
            },
            {
                id: 'Reshaping produces expected computation graph and also works with reverse mode AD.',
            },
        ],
    },
    {
        className: 'ut.autograd.Autograd_Explained',
        narrative:
            "Central to all neural networks in Neureka is the autograd package.                                      \n    The autograd package provides automatic differentiation for all default operations on Tensors.          \n    Neureka is a define-by-run library, which means that your backpropagation is defined by how             \n    your code is run, and that every single iteration can be different.                                     \n\n    The class neureka.Tensor is the central class of the main package.                                         \n    If you set its attribute 'rqsGradient' to True, Neureka starts to track all operations on it.           \n    When you finish the forward pass of your network                                                        \n    you can call .backward() and have all the gradients computed                                            \n    and distributed to the tensors requiring them automatically.                                            \n\n    The gradient for a tensor will be accumulated into a child tensor (component) which                     \n    can be accessed via the '.getGradient()' method.                                                        \n\n    To stop a tensor from tracking history, you can call '.detach()' to detach it from the                  \n    computation history, and to prevent future computation from being tracked.",
        title: 'Autograd - Automatic Differentiation',
        features: [
            {
                id: 'Simple automatic differentiation and propagation.',
            },
        ],
    },
    {
        className: 'ut.autograd.Autograd_Flags_Explained',
        narrative: '',
        title: 'Autograd Flags Explained',
        features: [
            {
                id: 'Advanced backpropagation on all AD-Modes ',
            },
            {
                id: 'We can create a shallow copy of a tensor detached from the computation graph.',
            },
        ],
    },
];
