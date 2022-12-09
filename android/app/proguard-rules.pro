# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

#react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

#react-native-config - !!! CHANGE PACKAGE NAME !!!
-keep class com.rnboilerplate.BuildConfig { *; }
#If using Dexguard, the shrinking phase will remove resources it thinks are unused. It is necessary to add an exception to preserve the build config package name.
-keepresources string/build_config_package
