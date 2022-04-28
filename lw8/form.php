<div>
    <div class="form_extras">
      <img class="form_img" src="img/Welcome.png" alt="Welcome" />
      <p class="form_text">Записаться на курс</p>
    </div>
    <form class="site-form" method="post" action="form_handler.php">
        <input class="site-form_input" required type="text" name="%name%" placeholder="Ваше имя">
        <input class="site-form_input" required type="text" name="%email%" placeholder="Email">
        <select class="site-form_state-input" required name="%state%" >
            <option style="display: none" value="Ваша жалоба">Деятельность</option>
            <option class="site-form_option" value="BackEnd - программист">BackEnd - программист</option>
            <option class="site-form_option" value="FrontEnd - программист">FrontEnd  - программист</option>
            <option class="site-form_option" value="Дизайнер">Дизайнер</option>
        </select>
        <input class="site-form_checkbox" required type="checkbox" name="%agreement%" placeholder="agreement">
        <label class="site-form_checkbox-text" for="%agreement%">Согласен получать информационные материалы о старте курса</label>
        <button class="site-form_button-input" type="submit">Записаться на курс</button>
    </form>
</div>
