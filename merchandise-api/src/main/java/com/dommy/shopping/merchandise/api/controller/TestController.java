package com.dommy.shopping.merchandise.api.controller;

import com.dommy.shopping.merchandise.api.MerchandiseApi;
import com.dommy.shopping.merchandise.api.model.TestMerchandise;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TestController implements MerchandiseApi {

    @Override
    public ResponseEntity<TestMerchandise> testMerchandise() {
        TestMerchandise testMerchandise = new TestMerchandise();
        testMerchandise.setName("test");
        return ResponseEntity.ok(testMerchandise);
    }
}
