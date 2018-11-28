package stackpath.util;

import com.sun.tools.classfile.ConstantPool;

import java.awt.*;
import java.io.File;
import java.io.IOException;

public class AppHelper {

    private static final Configuration CONFIGURATION = Configuration.getConfiguration();

    public static boolean launchApp(){
        boolean isAccessible;
        try{
            Desktop.getDesktop().open(new File(CONFIGURATION.getApplicationPath()));
            isAccessible = true;
        } catch (IOException e){
            isAccessible = false;
        }
        return isAccessible;
    }
}
