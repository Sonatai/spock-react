# Getting started with [![](https://jitpack.io/v/Gleethos/neureka.svg)](https://jitpack.io/#Gleethos/neureka)

**1. Add the JitPack url in your root `build.gradle` at the end of `repositories`**

```java
allprojects {
	repositories {
		//...
		maven { url 'https://jitpack.io' }
	}
}
```

**2. Add Neureka as dependency**

...either by specifiying the version tag:

```java
dependencies {
	implementation 'com.github.Gleethos:neureka:v0.21.0'
}
```

...or by using a custom commit hash instead:

```java
dependencies {
	implementation 'com.github.Gleethos:neureka:8485bca'//Any commit hash...
}
```
