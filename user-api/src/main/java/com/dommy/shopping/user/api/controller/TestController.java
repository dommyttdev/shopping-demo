package com.dommy.shopping.user.api.controller;


import com.dommy.shopping.user.api.UserApi;
import com.dommy.shopping.user.api.model.TestUser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController implements UserApi {

    @Override
    public ResponseEntity<TestUser> testUser() {
        TestUser user = new TestUser();
        user.setName("testUser");
        return ResponseEntity.ok(user);
    }
}
