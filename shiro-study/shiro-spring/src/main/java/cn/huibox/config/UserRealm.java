package cn.huibox.config;

import cn.huibox.pojo.User;
import cn.huibox.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

public class UserRealm extends AuthorizingRealm {

    @Autowired
    UserService userService;

    // 授权
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("执行了   授权");

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

        // 拿到当前登录的对象
        Subject subject = SecurityUtils.getSubject();
        User currentUser = (User) subject.getPrincipal();

        info.addStringPermission(currentUser.getPerms());

        return info;
    }

    // 认证
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        System.out.println("执行了  认证");


//        String name = "root";
//        String password = "123";



        UsernamePasswordToken userToken = (UsernamePasswordToken) token;

        User user = userService.queryUserByName(userToken.getUsername());
        if (user == null) {
            return null;
        }

        // 密码认证
        return new SimpleAuthenticationInfo(user,user.getPwd(),"");
    }
}