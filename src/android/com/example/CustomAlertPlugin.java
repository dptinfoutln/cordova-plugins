/**
 */
package com.example;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import android.R;
import android.content.Context;
import android.content.DialogInterface;
import android.app.AlertDialog;


import android.util.Log;

import java.util.Date;

public class CustomAlertPlugin extends CordovaPlugin {
  private static final String TAG = "CustomAlertPlugin";

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    Log.d(TAG, "Initializing MyCordovaPlugin");
  }

  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
    if(action.equals("showAlert")) {
      final String title = args.getString(0);
      final String content = args.getString(1);
      showCustomAlert(title, content);
      callbackContext.success();
      return true;
    } else {
      callbackContext.error("CustomAlertPlugin." + action + " not found !");
      return false;
    }
  }

  private void showCustomAlert(String title, String content){
    // see http://developer.android.com/guide/topics/ui/dialogs.html
    AlertDialog.Builder alertDialog = new AlertDialog.Builder(this.cordova.getActivity(), AlertDialog.THEME_DEVICE_DEFAULT_LIGHT);
    alertDialog.setTitle(title);
    alertDialog.setMessage(content);
    alertDialog.setPositiveButton(R.string.ok, new DialogInterface.OnClickListener(){
      public void onClick(DialogInterface dialog, int id){
        // User clicked OK button
      }
    });
    alertDialog.show();
  }
}
