package com.alert.plugin;

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

public class CustomAlertPlugin extends CordovaPlugin {
  private static final String TAG = "CustomAlertPlugin";

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);

    Log.d(TAG, "Initializing MyCordovaPlugin");
  }

	@Override
  public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
	    // TODO: Complete here
  }

  private void showCustomAlert(String title, String content){
     // TODO: Complete here
  }
}
