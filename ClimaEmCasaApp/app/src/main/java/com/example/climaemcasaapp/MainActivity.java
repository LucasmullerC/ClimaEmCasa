package com.example.climaemcasaapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.jetbrains.annotations.NotNull;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import okhttp3.*;

public class MainActivity extends AppCompatActivity  {
    TextView nomec,tempA,tempMin,tempMax;
    EditText mEdit;

    public void getData(String cidade) throws IOException {
        nomec = (TextView)findViewById(R.id.inicio);
        tempA =(TextView)findViewById(R.id.temp_atual);
        tempMin = (TextView)findViewById(R.id.min);
        tempMax = (TextView)findViewById(R.id.max);
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://community-open-weather-map.p.rapidapi.com/weather?q="+cidade+"&lang=pt&units=metric&mode=xml")
                .get()
                .addHeader("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
                .addHeader("x-rapidapi-key", "0781853661msh9a6850b90d5da32p104d9ajsnf3d14e714ca2")
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                e.printStackTrace();
            }

            @Override
            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                String responseData = response.body().string();
                DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
                DocumentBuilder builder;
                InputSource is;
                try {
                    builder = factory.newDocumentBuilder();
                    is = new InputSource(new StringReader(responseData));
                    Document doc = builder.parse(is);
                    NodeList nome = getString("city", doc);
                    NodeList TA = getString("temperature", doc);
                    runOnUiThread(new Runnable() {

                        @Override
                        public void run() {

                            nomec.setText(nome.item(0).getAttributes().getNamedItem("name").getNodeValue());
                            tempA.setText(TA.item(0).getAttributes().getNamedItem("value").getNodeValue() +"°C");
                            tempMin.setText(TA.item(0).getAttributes().getNamedItem("min").getNodeValue()+"°C");
                            tempMax.setText(TA.item(0).getAttributes().getNamedItem("max").getNodeValue()+"°C");


                        }
                    });
                } catch (ParserConfigurationException e) {
                } catch (SAXException e) {
                } catch (IOException e) {
                }
            }
        });
    }
    protected NodeList getString(String tagName, Document element) {
        NodeList list = element.getElementsByTagName(tagName);
        if (list != null && list.getLength() > 0) {
            return list;
        }

        return null;
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                mEdit   = (EditText)findViewById(R.id.nomecidade);
                try {
                    getData(mEdit.getText().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });


    }
}
