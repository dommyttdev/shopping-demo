package com.dommy.shopping.api.merchandise.controller;

import com.dommy.shopping.api.merchandise.MerchandiseApi;
import com.dommy.shopping.api.merchandise.model.TestMerchandise;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController implements MerchandiseApi {

    @Override
    public ResponseEntity<TestMerchandise> testMerchandise() {
        TestMerchandise testMerchandise = new TestMerchandise();
        testMerchandise.setName("test");
        return ResponseEntity.ok(testMerchandise);
    }
}
